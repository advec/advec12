{{ partial('_partial/navbar__white') }}
{{ page.content }}

<section class="filial-details">
  <div class="filial-details__container">
    <div class="filial-details__container__return">
      <a href="/filiais/" class="btn btn--black">Voltar para filiais</a>
    </div>
    <div class="filial-details__container__title">
      <h2>{{ page.title }}</h2>
    </div>
    <div class="filial-details__container__list">
      {% for filial in site.data.filial %}
      {% if filial.est == page.estado %}
        <div class="filial-details__container__list__block">
          <h3>{{ filial.nome }}</h3>
          <p>{{ filial.endereco }}</p>
          <div class="filial-details__container__list__block__end">
            <h4>Pastor: {{ filial.pastor.nome }}</h4>
            {% if filial.telefone != "" %}<h4>Telefone: {{ filial.telefone }}</h4>{% endif %}
          </div>
          <p>
            <a href="mailto: secretaria.{{ filial.id }}@advec.org">
              <i class="icon--email"></i>
            </a>
          </p>
        </div>
      {% endif %}
    {% endfor %}
    </div>
  </div>
  <div class="filial-details__menu">
    <div class="filial-details__menu__container">
      <div class="filial-details__menu__container__list">
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/rj" class="btn btn--black">
            Rio de Janeiro
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/sp" class="btn btn--black">
            São Paulo
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/mg" class="btn btn--black">
            Minas Gerais
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/es" class="btn btn--black">
            Espírito Santo
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/df" class="btn btn--black">
            Distrio Federal
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/pe" class="btn btn--black">
            Pernambuco
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/pr" class="btn btn--black">
            Paraná
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/rn" class="btn btn--black">
            Rio Grande do Norte
          </a>
        </div>
        <div class="filial-details__menu__container__list__item">
          <a href="/filiais/sc" class="btn btn--black">
            Santa Catarina
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
