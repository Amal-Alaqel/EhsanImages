

  module.exports = () => ({

    email: {
      config: {
        provider: 'strapi-provider-email-sendgrid',
        providerOptions: {
          apiKey: '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',
        },
        settings: {
          defaultFrom: 'ooammolaoo@gmail.com',
          defaultReplyTo: 'ooammolaoo@gmail.com',
        },
      },
    },
    // ...
    documentation: {
      config: {        
        "x-strapi-config": {
          "path": "/documentation",
          "showGeneratedFiles": true,
          "pluginsForWhichToGenerateDoc": [
            "email",
            "upload",
            "users-permissions"
          ],
          "plugins": ['email',  'upload', 'users-permissions']
        },
      },
    },
  });