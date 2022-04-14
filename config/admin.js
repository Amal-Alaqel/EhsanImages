module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a529d5c467065ce9e818e158eba690b3'),
  },
});
