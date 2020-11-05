# goit-js-hw-11-asynchrony

- Асинхронность в JavaScript
  - 0.01 Однопоточность и многопоточность
  - 0.03 Отоложенные вызовы (планирование)
  - 0.06 Web workers для «многопоточности»
  - 0.07 Service workers для «перехвата» запросов от документа (кеширование)
         Статья ( https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/ )
  - 0.09 Планирование: window.setTimeout() 
    - 0.18 Очистка таймаута с clearTimeout(timeoutId)
  - 0.22 window.setInterval()
    - 0.24 Очистка интервала с clearInterval(intervalId)
  - 0.26 Цикл событий (event loop)
         Площадка ( http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D )
    - 0.37 setTimeout(N) и setTimeout(0)
         Все видео по циклу ( http://fecore.net.ua/books/m5ph3r-javascript/module-11/event-loop.html )
- 0.49 Мастерская: оповещение
- 1.01 Мастерская: «надоедалка» подписки
- 1.07 Bootstrap для CSS ( https://getbootstrap.com/ )
       Bootstrap Native для JS
- 1.30 Встроенный объект Date
       Библиотека date-fns ( https://date-fns.org/ )
       - 1.31 Создание
       - 1.33 Unix-время
       - 1.35 Разница времени
         Date.now() и new Date().getTime()
       - 1.39 Сборщик мусора
- 1.40 Мастерская: таймер