{% if page.footer == NULL %}
<!DOCTYPE html>
<html lang="pt-br">
  {{ partial('_partial/head') }}
<body>
<div class="preload"></div>
{% endif %}
  {{ body }}
  {% if page.footer == NULL %}
    {{ partial('_partial/footer') }}
  {% endif %}
{% if page.footer == NULL %}
</body>
</html>
{% endif %}
