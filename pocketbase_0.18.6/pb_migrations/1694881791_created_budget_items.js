/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a6ci1266zk948lm",
    "created": "2023-09-16 16:29:51.524Z",
    "updated": "2023-09-16 16:29:51.524Z",
    "name": "budget_items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p90laz2t",
        "name": "item_name",
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
        "id": "cwpblpv2",
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
  const collection = dao.findCollectionByNameOrId("a6ci1266zk948lm");

  return dao.deleteCollection(collection);
})
