import '../scss/main.scss';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class='header'>
      <a href="https://github.com/WhereIU/hexlet-projects_frontend-project-11">Исходный код</a>
    </div>

    <div class="body">
      <div class="column">
        <h1>RSS агрегатор</h1>
        <p class="pre-line">
          Начните читать RSS сегодня!
          Это легко, это красиво.
        </p>
        <form id="rss-form">
          <input type="text" required autofocus id="rss-url" name="url" aria-label="url" placeholder="Ссылка RSS">
          <label for="rss-url">RSS-ссылка:</label>
          <button>Добавить</button>
        </form>
        <p class="padding_top-1vh">
          Пример: https://lorem-rss.hexlet.app/feed
        </p>
      </div>
    </div>

    <div class="feedback">
      <p>Created by <a href="https://github.com/WhereIU">WhereIU</a></p>
    </div>
  </div>
`;
