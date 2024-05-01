import sqlite3 from 'sqlite3'
import sqlite from 'sqlite'

const path = require('path')

async function sqliteConnection(){
  const database = await sqlite3.open({
    filename: path.resolve(__dirname, '..', 'databse.db'),
    drive: sqlite3.Database
  })

  return database
}

export default sqliteConnection