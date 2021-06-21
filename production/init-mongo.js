db.createUser({
    user: 'root',
    pwd: 'Kw3tter!',
    roles: [{
        role: 'readWrite',
        db: 'tweet_db'
    }]
})