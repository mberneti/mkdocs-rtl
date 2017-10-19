<script type="text/javascript">
window.JSConfig = JSON.parse('{"SwaggerEndpoints":[{"Url":"/swagger/v1/swagger.json","Description":"Api v1"}],"BooleanValues":["false","true"],"DocExpansion":"list","SupportedSubmitMethods":["get","post","put","delete","patch"],"OnCompleteScripts":["/swagger-helper.js"],"OnFailureScripts":[],"ShowRequestHeaders":true,"JsonEditor":true,"OAuth2ClientId":"your-client-id","OAuth2ClientSecret":"your-client-secret-if-required","OAuth2Realm":"your-realms","OAuth2AppName":"your-app-name","OAuth2ScopeSeparator":" ","OAuth2AdditionalQueryStringParams":{}}');
    
    $(function () {

      hljs.configure({
        highlightSizeThreshold: 5000
      });

      // Pre load translate...
      if(window.SwaggerTranslator) {
        window.SwaggerTranslator.translate();
      }
      window.swaggerUi = new SwaggerUi({
        url: JSConfig.SwaggerEndpoints[0].Url,
        dom_id: "swagger-ui-container",
        supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        onComplete: function(swaggerApi, swaggerUi){
          if(typeof initOAuth == "function") {
            initOAuth({
                  clientId: JSConfig.OAuth2ClientId,
                  clientSecret: JSConfig.OAuth2ClientSecret,
                  realm: JSConfig.OAuth2Realm,
                  appName: JSConfig.OAuth2AppName,
                  scopeSeparator: JSConfig.OAuth2ScopeSeparator,
                  additionalQueryStringParams: JSConfig.OAuth2AdditionalQueryStringParams
            });
          }

          if(window.SwaggerTranslator) {
            window.SwaggerTranslator.translate();
          }
              _.each(JSConfig.OnCompleteScripts, function (script) {
                $.getScript(script);
              });
        },
        onFailure: function(data) {
          log("Unable to Load SwaggerUI");
        },
        docExpansion: JSConfig.DocExpansion,
        jsonEditor: JSConfig.JsonEditor,
        defaultModelRendering: 'schema',
        showRequestHeaders: JSConfig.ShowRequestHeaders,
        showOperationIds: false
      });

      window.swaggerUi.load();

      function log() {
        if ('console' in window) {
          console.log.apply(console, arguments);
        }
      }
  });
  </script>