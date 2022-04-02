import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('userData.db')
export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS userData (
          id INTEGER PRIMARY KEY NOT NULL,
          token TEXT NOT NULL,
          LocalUserId TEXT NOT NULL
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  })

  return promise;
}
export const insertUser = (token,LocalUserId) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO userData (token,LocalUserId)
            VALUES (?,?)`,
          [token,LocalUserId],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err)},
        )
      })
    })
  
    return promise;
  }
  
  export const loadUser = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM userData',
          [],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err) },
        )
      })
    })
  
    return promise;
  }