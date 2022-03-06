<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body class="bg-slate-200">
        <div id="app"></div>
        <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
        {{-- <script type="text/javascript" src="{{ asset('js/manifest.js') }}"></script> --}}
        {{-- <script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script> --}}
    </body>
</html>
