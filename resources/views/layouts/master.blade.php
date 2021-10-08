<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <title>Технологии прекрасного - окружные школы цифрового искусства</title>
  <!--meta-->
  <meta charset="UTF-8">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="description" content="Технологии прекрасного - окружные школы цифрового искусства" />
  <META NAME="keywords" CONTENT="Технологии прекрасного - окружные школы цифрового искусства">
  <META NAME="AUTHOR" CONTENT="https://vk.com/glrlcocks">
  <meta name="revisit-after" content="5 days">
  <link rel="SHORTCUT ICON" href="assets/img/506-5061203_-png-9-1.svg" type="image/x-icon">
  <!--соц сети-->
  <meta property="og:title" content="Технологии прекрасного - окружные школы цифрового искусства">
  <meta property="og:description" content="Проект направлен на активную творческую молодежь (16-30 лет), которая стремиться создавать собственные проекты в сфере цифрового искусства и реализовать свой творческий потенциал.">
  <meta property="og:image" content="/assets/img/social.png">
  <meta itemprop="image" content="/assets/img/social.png" />
  <meta name="twitter:image:src" content="/assets/img/social.png" />
  <meta property="og:url" content="">
  <link rel="stylesheet" href="{{ mix('css/main.css')}}">

  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body class="body">
  <div id="app">
    @yield('content')
  </div>
  <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>