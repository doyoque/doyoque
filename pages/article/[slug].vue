<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug

type ArticlePayload = {
  article?: Record<string, any>
}

type PaywallPayload = {
  error?: string
  article?: {
    title?: string
    description?: string
    date?: string
    exclusive?: boolean
    price?: string
  }
  x402?: {
    price?: string
    network?: string
    facilitatorUrl?: string
  }
}

const {
  data: articlePayload,
  error: articleError
} = await useFetch<ArticlePayload>(`/api/articles/${slug}`, {
  key: `article-${slug}`
})

const article = computed(() => articlePayload.value?.article)
const paywall = computed<PaywallPayload | null>(() => {
  if (articleError.value?.statusCode !== 402) {
    return null
  }

  return articleError.value.data as PaywallPayload
}
)
const paywallEndpoint = computed(() => `/api/articles/${slug}`)
const copiedEndpoint = ref(false)
const isPaywallModalOpen = ref(false)
const paywallFrame = ref<HTMLIFrameElement | null>(null)
const paywallFrameKey = ref(0)

const openPaywallModal = (): void => {
  paywallFrameKey.value += 1
  isPaywallModalOpen.value = true
}

const closePaywallModal = (): void => {
  isPaywallModalOpen.value = false
}

const handlePaywallFrameLoad = (): void => {
  if (!import.meta.client) {
    return
  }

  try {
    const frameDocument = paywallFrame.value?.contentDocument ||
      paywallFrame.value?.contentWindow?.document
    const responseText = frameDocument?.body?.innerText?.trim()

    if (!responseText?.startsWith('{')) {
      return
    }

    const paidPayload = JSON.parse(responseText) as ArticlePayload

    if (!paidPayload.article) {
      return
    }

    articlePayload.value = paidPayload
    articleError.value = null
    closePaywallModal()
  } catch {
    // The frame can move through wallet or blob states that are not readable.
  }
}

const copyPaywallEndpoint = async (): Promise<void> => {
  if (!import.meta.client || !navigator.clipboard) {
    return
  }

  await navigator.clipboard.writeText(`${window.location.origin}${paywallEndpoint.value}`)
  copiedEndpoint.value = true

  window.setTimeout(() => {
    copiedEndpoint.value = false
  }, 1600)
}

watch(isPaywallModalOpen, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

if (!article.value && !paywall.value) {
  throw createError({
    statusCode: articleError.value?.statusCode ?? 404,
    statusMessage: articleError.value?.statusMessage ?? 'Article not found'
  })
}

useSeoMeta({
  title: () => article.value?.title ?? paywall.value?.article?.title ?? 'Doyoque - Article',
  description: () => article.value?.description ?? paywall.value?.article?.description ?? '',
  ogTitle: () => article.value?.title ?? paywall.value?.article?.title ?? 'Doyoque - Article',
  ogDescription: () => article.value?.description ?? paywall.value?.article?.description ?? '',
  ogType: 'article',
  twitterCard: 'summary',
  twitterSite: '@74776F74696D65',
  twitterTitle: () => article.value?.title ?? paywall.value?.article?.title ?? 'Doyoque - Article',
  twitterDescription: () => article.value?.description ?? paywall.value?.article?.description ?? ''
})
</script>

<template>
  <main class="page-shell">
    <article class="editorial-panel">
      <div>
        <NuxtLink to="/article" class="kicker hover:text-[rgb(var(--color-text))]">
          Articles / {{ article?.date ?? paywall?.article?.date ?? 'Undated' }}
        </NuxtLink>
      </div>
      <ContentRenderer
        v-if="article"
        class="content-prose article-prose"
        :value="article"
      />
      <div v-else-if="paywall" class="content-prose article-prose paywall-panel">
        <span class="article-meta">Exclusive / {{ paywall.article?.price }}</span>
        <h1>{{ paywall.article?.title ?? 'Payment Required' }}</h1>
        <p>{{ paywall.article?.description ?? 'This article is protected by x402.' }}</p>
        <div class="paywall-details">
          <span>Network</span>
          <strong>{{ paywall.x402?.network }}</strong>
          <span>Endpoint</span>
          <code>{{ paywallEndpoint }}</code>
          <span>Protocol</span>
          <strong>HTTP 402 + PAYMENT-SIGNATURE</strong>
        </div>
        <div class="paywall-actions">
          <button
            type="button"
            class="paywall-action paywall-action-primary"
            @click="openPaywallModal"
          >
            Pay with wallet
          </button>
          <button
            type="button"
            class="paywall-action"
            @click="copyPaywallEndpoint"
          >
            {{ copiedEndpoint ? 'Copied endpoint' : 'Copy endpoint' }}
          </button>
        </div>
        <p>
          Request the endpoint with an x402-compatible client. After payment verification
          and settlement, the API returns the full article payload.
        </p>
      </div>
    </article>
    <Teleport to="body">
      <div
        v-if="isPaywallModalOpen"
        class="paywall-modal"
        role="dialog"
        aria-modal="true"
        aria-label="x402 payment"
      >
        <button
          type="button"
          class="paywall-modal-backdrop"
          aria-label="Close payment modal"
          @click="closePaywallModal"
        />
        <section class="paywall-modal-panel">
          <div class="paywall-modal-header">
            <div>
              <span class="article-meta">x402 Checkout</span>
              <h2>{{ paywall?.article?.title ?? 'Payment Required' }}</h2>
            </div>
            <button
              type="button"
              class="paywall-modal-close"
              @click="closePaywallModal"
            >
              Close
            </button>
          </div>
          <iframe
            :key="paywallFrameKey"
            ref="paywallFrame"
            class="paywall-modal-frame"
            :src="paywallEndpoint"
            title="x402 wallet payment"
            @load="handlePaywallFrameLoad"
          />
        </section>
      </div>
    </Teleport>
  </main>
</template>
