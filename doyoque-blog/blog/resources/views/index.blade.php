<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>{{ config('app.name') }}</title>
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon"/>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon"/>

    <!-- Fonts -->
    <link href="@if(Config::get('app.env') === 'local')
        {{ asset('css/app.css') }}
    @else
        {{ mix('css/app.css') }}
    @endif" rel="stylesheet" />
  </head>
  <body>
    <div id="app" class="container"></div>
    <script type="text/javascript" src="@if(Config::get('app.env') === 'local') {{ asset('/js/manifest.js') }} @else {{ mix('/js/manifest.js') }} @endif"></script>
    <script type="text/javascript" src="@if(Config::get('app.env') === 'local') {{ asset('/js/vendor.js') }} @else {{ mix('/js/vendor.js') }} @endif"></script>
    <script type="text/javascript" src="@if(Config::get('app.env') === 'local') {{ asset('/js/app.js') }} @else {{ mix('/js/app.js') }} @endif"></script>
  </body>
</html>
