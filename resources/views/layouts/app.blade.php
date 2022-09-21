<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>welcome</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Arial" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app" class="login-container body-style" >

    <div class="splitdiv-left" id="leftdiv">
        <div id="leftdivcard">
            <div class="d-flex justify-content-center"  >
    <div class=" "  >
        <strong><h2 style="font-weight: 900; margin-right: 0px!important;color:#ffffff;text-align: center">
                Welcome to Frontier Technology Adoption Research Dashboard
            </h2>
        </strong>
    </div>
</div>

    <main class="py-4">
        @yield('content')
    </main>
        </div>

    </div>
    <div class="splitdiv-right" id="rightdiv">
        <div class="container">
            <nav class="navbar">
                <img src={{url("images/client_1.png")}} alt="logo" width="150" height="150">
            </nav>

                <footer class="login-footer">
                    <img src={{url("images/logo-sig.png")}} alt="logo" width="180" height="60">

                </footer>
        </div>
    </div>
</div>

</body>
</html>
