<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <title>Патриоты Сибири - Конкурс проектов интерактивных военно-исторических реконструкций</title>
  <!--meta-->
  <meta charset="UTF-8">
  <meta name="yandex-verification" content="dc70469ab3fdb89d" />
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="description" content="Патриоты Сибири - Конкурс проектов интерактивных военно-исторических реконструкций" />
  <META NAME="keywords" CONTENT="Патриоты Сибири - Конкурс проектов интерактивных военно-исторических реконструкций">
  <META NAME="AUTHOR" CONTENT="https://vk.com/glrlcocks">
  <meta name="revisit-after" content="5 days">
  <link rel="SHORTCUT ICON" href="assets/img/506-5061203_-png-9-1.svg" type="image/x-icon">
  <!--соц сети-->
  <meta property="og:title" content="Патриоты Сибири - Конкурс проектов интерактивных военно-исторических реконструкций">
  <meta property="og:description" content="призван стимулировать молодежь к яркому и всестороннему освещению патриотической тематики, связанной с традициями и современными задачами патриотического воспитания, через применение современных технических, цифровых средств в своих проектах. Особенностью конкурса 2020 года является его тематическая направленность, посвященная 75-летию Победы в Великой Отечественной войне.">
  <meta property="og:image" content="assets/img/social__back.jpg">
  <meta itemprop="image" content="assets/img/social__back.jpg" />
  <meta name="twitter:image:src" content="assets/img/social__back.jpg" />
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