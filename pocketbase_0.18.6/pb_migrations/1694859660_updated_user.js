/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf1lie8gk7d6l6p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyw6yano",
    "name": "Debt_IDs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cqnwcnyou3wg289",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf1lie8gk7d6l6p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyw6yano",
    "name": "Dept_IDs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cqnwcnyou3wg289",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
