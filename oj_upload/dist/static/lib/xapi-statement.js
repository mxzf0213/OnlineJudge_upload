async function sendStatement (username, mail, verb, verbId, object, objectId) {
  var uNamejs = username
  var uEmailjs = mail
  var conf = {
    'endpoint': 'http://10.24.2.37/data/xAPI/',
    'auth': 'Basic MzhjYTRhNjEyNDY2Y2MyYzY2NGUyZGQ0NGU4YzQzNjc5ODRiYmRjMjoxYTg2NzY0ODU0ZTM0MGU4YmNhYTM5YmQ3OTY0YTVjMjJmYjFkNGQ1'
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
