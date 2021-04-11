=== SRTUCTURE ===
client/
  dist/ {folder for client}

config/
    db.config.js            (configurations database file)
    locations.config.js     (configurations locations file)

files/                        (file storage)
    blanks/                  
    contents/                

server/ (this project)

=====================================================================
=== db.config.js ===

module.exports = {
  host: 'host',
  user: 'user',
  password: 'password',
  database: 'document_creator'
};

======================================================================
=== locations.config.js ===
module.exports = {
  files: "../files",
  client: "../client/dist",
}
=======================================================================