const Ajv = require('ajv');
const ajv = new Ajv({
  allErrors: true,
  extendRefs: 'fail'
});
const schema = require('./schema');
const validate = ajv.compile(schema);
module.exports = { schema, validate };
