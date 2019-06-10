<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/showcase.css') }}">
{{--        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />--}}
{{--        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />--}}

        <title>{{ env('APP_NAME') }}</title>

        <!-- Fonts -->
    </head>
    <body>
        <noscript>You need JavaScript to run this application</noscript>
        <div id="systemmanager-showcase"></div>

        <!-- Scripts -->
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
