var AUTH0_CLIENT_ID='EQSZ7Mqp22Be0l7YCXgHHDBCLlpPn1QK'; 
var AUTH0_DOMAIN='tylerharrisdesign.auth0.com'; 
var AUTH0_CALLBACK_URL=location.href;

user.firebase_data = {
  user_id: new Buffer(user.email).toString('base64'),
  company: !user.isSocial ? context.connection.replace(/\./g, '-') : null,
  foo: 'bar'
};