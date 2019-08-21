async function sendStatement (username,mail,verb, verbId, object, objectId) {
  var uNamejs = username
  var uEmailjs = mail
  var conf = {
    'endpoint': 'https://trial-lrs.yetanalytics.io/xapi/',
    'auth': 'Basic ' + toBase64('f6c84b798c6306ea37073fa38af392e1:af407fbb06fbc543bc9a2e03533db29c')
  }
  ADL.XAPIWrapper.changeConfig(conf)
  var statement = {
    'actor': {
      'name': uNamejs,
      'mbox': 'mailto:' + uEmailjs
    },
    'verb': {
      'id': verbId,
      'display': {'en-US': verb}
    },
    'object': {
      'id': objectId,
      'definition': {
        'name': {'en-US': object}
      }
    }
  }
  var result = ADL.XAPIWrapper.sendStatement(statement)
}
