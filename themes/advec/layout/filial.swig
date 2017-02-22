{{ partial('_partial/navbar') }}
{{ page.content }}

<section class="filial__section--lista">
  <div class="section--lista__inner-wrap">
    <div class="inner-wrap__title">
      <h2>Rio de Janeiro</h2>
      <div class="inner-wrap__estado">
        {% for filial in site.data.filial %}
        <div class="estado__block">
          <h3>{{ filial.nome }}</h3>
          <p>{{ filial.endereco }}</p>
          <h4>{{ filial.pastor.nome }}</h4>
          <h4>{{ filial.telefone }}</h4>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
