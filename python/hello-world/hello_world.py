def hello(name = ''):
    if name == '':
        return 'Hello, World!'
    else:
        return ('Hello, %s!' % name)