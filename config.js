exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                              'mongodb://scott.diallo6@gmail.com:<Univa2011@>@ds019976.mlab.com:19976/mongod-thinkful-course':
                            'mongodb://localhost/mongod-thinkful-course'

);
exports.PORT = process.env.PORT || 8080;