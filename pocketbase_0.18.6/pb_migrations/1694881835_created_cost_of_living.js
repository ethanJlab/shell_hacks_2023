/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mmny7cznpf1e13x",
    "created": "2023-09-16 16:30:35.261Z",
    "updated": "2023-09-16 16:30:35.261Z",
    "name": "cost_of_living",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1bdvqg1s",
        "name": "area_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ipyklmn6",
        "name": "cost",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mmny7cznpf1e13x");

  return dao.deleteCollection(collection);
})
