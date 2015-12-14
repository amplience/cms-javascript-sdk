if(typeof amp === "undefined" && typeof require !== "undefined"){
    var amp = require("../src/cms-javascript-sdk");
}

var productData = {
    "data": {
        "content": {
            "@graph": [
                {
                    "image": {
                        "id": "a9f38b27-b570-4e99-8f7e-f6c0ec4fb5df"
                    },
                    "@id": "http://content.amplience.com/112ef067-4b3c-4ec3-80cd-1700d683829e",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "@context": "http://context.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                },
                {
                    "image": {
                        "id": "fc117a60-73ce-434f-b649-6b87ec22c517"
                    },
                    "@id": "http://content.amplience.com/8a77a547-064a-4562-a19c-dc21e1038ec2",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "@context": "http://context.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                },
                {
                    "image": {
                        "id": "61a12cab-3b3e-4bf8-abc9-3d6e3cc21fd8"
                    },
                    "@id": "http://content.amplience.com/61a12cab-3b3e-4bf8-abc9-3d6e3cc21fd8",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "@context": "http://context.amplience.com/e461d55c-421e-4c59-a3a0-dcbc79a76fb2"
                },
                {
                    "gridList": [
                        {
                            "@id": "http://content.amplience.com/112ef067-4b3c-4ec3-80cd-1700d683829e",
                            "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                        },
                        {
                            "@id": "http://content.amplience.com/8a77a547-064a-4562-a19c-dc21e1038ec2",
                            "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                        },
                        {
                            "@id": "http://content.amplience.com/61a12cab-3b3e-4bf8-abc9-3d6e3cc21fd8",
                            "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                        }
                    ],
                    "title": "I am a product card",
                    "@id": "http://content.amplience.com/91dc8a17-1e3a-49c3-bd2c-00f5c385a335",
                    "@type": "http://schema.amplience.com/7fec7887-f076-446f-8a6c-355b8b63d815",
                    "@context": "http://context.amplience.com/7fec7887-f076-446f-8a6c-355b8b63d815"
                }
            ]
        },
        "schema": {
            "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/6ccce15f-2d6f-4095-acf1-57ea6e589f47/article.json": {
                "$schema": "http://json-schema.org/schema#",
                "id": "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/6ccce15f-2d6f-4095-acf1-57ea6e589f47/article.json",
                "meta": {
                    "name": "Article",
                    "description": "An article is a piece of dynamic media that has an associated call to action",
                    "icons": [
                        {
                            "size": 256,
                            "url": "http://i.imgur.com/JhZR6yn.png"
                        }
                    ],
                    "card": {
                        "uri": "//apps.dev-artifacts.adis.ws/cms-cards/develop/11/gallery/index.html",
                        "mapping": {
                            "image": "/image",
                            "headline": "/imageAltText",
                            "sub": "/callToActionLabel"
                        }
                    }
                },
                "allOf": [
                    {
                        "$ref": "#/definitions/self"
                    },
                    {
                        "$ref": "http://schema.amplience.com/sys/content-base.json#/definitions/contentBase"
                    }
                ],
                "definitions": {
                    "self": {
                        "type": "object",
                        "properties": {
                            "image": {
                                "type": "object",
                                "allOf": [
                                    {
                                        "$ref": "http://schema.amplience.com/sys/di-asset-link.json#/definitions/diAssetLink"
                                    },
                                    {
                                        "properties": {
                                            "mediaType": {
                                                "enum": [
                                                    "image"
                                                ]
                                            }
                                        }
                                    }
                                ],
                                "_semanticType": "http://semantic-type.amplience.com/asset"
                            },
                            "imageAltText": {
                                "type": "string",
                                "maxLength": 255,
                                "_label": {
                                    "value": "Image Alt Text",
                                    "hint": "the text you would like screen readers to read, or for the user to see on hover"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "callToActionLabel": {
                                "type": "string",
                                "maxLength": 120,
                                "_label": {
                                    "value": "Call to Action Label",
                                    "hint": "the text you would like to be displayed in the call to action",
                                    "labelId": "account-project-article-call-to-action-label",
                                    "hintId": "account-project-article-call-to-action-hint"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "callToActionSku": {
                                "type": "string",
                                "maxLength": 20,
                                "_label": {
                                    "value": "Call to Action SKU",
                                    "hint": "the SKU of the product you would like the call to action to link to",
                                    "labelId": "account-project-article-call-to-action-sku-label",
                                    "hintId": "account-project-article-call-to-action-sku-hint"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/symbol"
                            }
                        },
                        "required": [
                            "image",
                            "imageAltText",
                            "callToActionLabel",
                            "callToActionSku"
                        ],
                        "additionalProperties": false
                    }
                }
            },
            "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/7fec7887-f076-446f-8a6c-355b8b63d815/mixed-media-grid_1.json": {
                "$schema": "http://json-schema.org/schema#",
                "id": "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/7fec7887-f076-446f-8a6c-355b8b63d815/mixed-media-grid_1.json",
                "meta": {
                    "name": "Mixed Media Grid",
                    "description": "A mixed media grid represents a grid of mixed media",
                    "icons": [
                        {
                            "size": 256,
                            "url": "http://i1.adis.ws/i/playground/mixedMediaGrid"
                        }
                    ],
                    "card": {
                        "uri": "//apps.dev-artifacts.adis.ws/cms-cards/develop/12/gallery/index.html",
                        "mapping": {
                            "headline": "/title",
                            "sub": "/sub",
                            "label1" : "/label1",
                            "data1": "/value1",
                            "label2" : "/label2",
                            "data2": "/value2",
                            "image": [
                                "/gridList/0/image",
                                "/gridList/0"
                            ]
                        }
                    }
                },
                "allOf": [
                    {
                        "$ref": "#/definitions/self"
                    },
                    {
                        "$ref": "http://schema.amplience.com/sys/content-base.json#/definitions/contentBase"
                    }
                ],
                "definitions": {
                    "self": {
                        "type": "object",
                        "properties": {
                            "gridList": {
                                "type": "array",
                                "items": {
                                    "anyOf": [
                                        {
                                            "allOf": [
                                                {
                                                    "$ref": "http://schema.amplience.com/sys/content-link.json#/definitions/contentLink"
                                                },
                                                {
                                                    "properties": {
                                                        "schema": {
                                                            "enum": [
                                                                "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/6ccce15f-2d6f-4095-acf1-57ea6e589f47/article.json",
                                                                "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/6ccce15f-2d6f-4095-acf1-57ea6e589f47/article.json"
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "allOf": [
                                                {
                                                    "$ref": "http://schema.amplience.com/sys/content-link.json#/definitions/contentLink"
                                                },
                                                {
                                                    "properties": {
                                                        "schema": {
                                                            "enum": [
                                                                "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/e461d55c-421e-4c59-a3a0-dcbc79a76fb2/image.json"
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "allOf": [
                                                {
                                                    "$ref": "http://schema.amplience.com/sys/di-asset-link.json#/definitions/diAssetLink"
                                                },
                                                {
                                                    "properties": {
                                                        "mediaType": {
                                                            "enum": [
                                                                "image"
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "minItems": 0,
                                "_semanticType": "http://semantic-type.amplience.com/mixed-list"
                            }
                        }
                    }
                }
            },
            "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/e461d55c-421e-4c59-a3a0-dcbc79a76fb2/image.json": {
                "$schema": "http://json-schema.org/schema#",
                "id": "http://schema.amplience.com/288e8a5d-49bb-4d70-9c79-f8fc0dfc220f/10ae7dc6-774b-4abe-92b6-f9a4685bc586/e461d55c-421e-4c59-a3a0-dcbc79a76fb2/image.json",
                "meta": {
                    "name": "Image",
                    "description": "An image links to a piece of dynamic media, and contains meta data and a call to action",
                    "icons": [
                        {
                            "size": 256,
                            "url": "http://i1.adis.ws/i/playground/heroBanner"
                        }
                    ],
                    "card": {
                        "uri": "//apps.dev-artifacts.adis.ws/cms-cards/develop/11/gallery/index.html",
                        "mapping": {
                            "image0": "/image",
                            "headline": "/heading",
                            "sub": "/bodyText"
                        }
                    }
                },
                "allOf": [
                    {
                        "$ref": "#/definitions/self"
                    },
                    {
                        "$ref": "http://schema.amplience.com/sys/content-base.json#/definitions/contentBase"
                    }
                ],
                "definitions": {
                    "self": {
                        "type": "object",
                        "properties": {
                            "image": {
                                "allOf": [
                                    {
                                        "$ref": "http://schema.amplience.com/sys/di-asset-link.json#/definitions/diAssetLink"
                                    },
                                    {
                                        "properties": {
                                            "mediaType": {
                                                "enum": [
                                                    "image"
                                                ]
                                            }
                                        }
                                    }
                                ],
                                "_label": {
                                    "value": "Image",
                                    "hint": "an image asset"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/asset"
                            },
                            "imageAltText": {
                                "type": "string",
                                "maxLength": 255,
                                "_label": {
                                    "value": "Image Alt Text",
                                    "hint": "the text you would like screen readers to read, or for the user to see on hover"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "preHeading": {
                                "type": "string",
                                "maxLength": 255,
                                "_label": {
                                    "value": "Pre-Heading",
                                    "hint": "a heading tag line that introduces or contextualises the heading"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "heading": {
                                "type": "string",
                                "maxLength": 255,
                                "_label": {
                                    "value": "Heading",
                                    "hint": "the main heading"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "bodyText": {
                                "type": "string",
                                "maxLength": 5000,
                                "_label": {
                                    "value": "Body Text",
                                    "hint": "some great editorial body content"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/markdown"
                            },
                            "strapLine": {
                                "type": "string",
                                "maxLength": 500,
                                "_label": {
                                    "value": "Strapline",
                                    "hint": "a punchy strapline"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "callToActionLabel": {
                                "type": "string",
                                "maxLength": 120,
                                "_label": {
                                    "value": "Call to Action Label",
                                    "hint": "the text you would like to be displayed in the call to action"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "callToActionSku": {
                                "type": "string",
                                "maxLength": 20,
                                "_label": {
                                    "value": "Call to Action SKU",
                                    "hint": "the SKU of the product you would like the call to action to link to"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/symbol"
                            },
                            "customField1": {
                                "type": "string",
                                "maxLength": 5000,
                                "_label": {
                                    "value": "Custom field 1",
                                    "hint": "a general purpose custom field"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            },
                            "customField2": {
                                "type": "string",
                                "maxLength": 5000,
                                "_label": {
                                    "value": "Custom field 2",
                                    "hint": "a general purpose custom field"
                                },
                                "_semanticType": "http://semantic-type.amplience.com/text"
                            }
                        },
                        "required": [
                            "image",
                            "imageAltText",
                            "preHeading",
                            "heading",
                            "bodyText",
                            "strapLine",
                            "callToActionLabel",
                            "callToActionSku"
                        ],
                        "additionalProperties": false
                    }
                }
            }
        },
        "requestedContent": [
            {
                "@id": "http://content.amplience.com/91dc8a17-1e3a-49c3-bd2c-00f5c385a335"
            }
        ]
    }
};

describe("cms-javascript-sdk", function() {
    it("global object should exist", function(){
        expect(amp).not.toBe(undefined);
    });

    it("should have inlineContent property on object", function(){
        expect(typeof amp.inlineContent).toBe('function');
    });

    it("should inline content", function(){
        var expectedResponse = {
            "@id": "http://content.amplience.com/91dc8a17-1e3a-49c3-bd2c-00f5c385a335",
            "gridList": [
                {
                    "@id": "http://content.amplience.com/112ef067-4b3c-4ec3-80cd-1700d683829e",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "image": {
                        "id": "a9f38b27-b570-4e99-8f7e-f6c0ec4fb5df"
                    },
                    "@context": "http://context.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                },
                {
                    "@id": "http://content.amplience.com/8a77a547-064a-4562-a19c-dc21e1038ec2",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "image": {
                        "id": "fc117a60-73ce-434f-b649-6b87ec22c517"
                    },
                    "@context": "http://context.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47"
                },
                {
                    "@id": "http://content.amplience.com/61a12cab-3b3e-4bf8-abc9-3d6e3cc21fd8",
                    "@type": "http://schema.amplience.com/6ccce15f-2d6f-4095-acf1-57ea6e589f47",
                    "image": {
                        "id": "61a12cab-3b3e-4bf8-abc9-3d6e3cc21fd8"
                    },
                    "@context": "http://context.amplience.com/e461d55c-421e-4c59-a3a0-dcbc79a76fb2"
                }
            ],
            "title": "I am a product card",
            "@type": "http://schema.amplience.com/7fec7887-f076-446f-8a6c-355b8b63d815",
            "@context": "http://context.amplience.com/7fec7887-f076-446f-8a6c-355b8b63d815"
        };

        expect(amp.inlineContent(productData)).toEqual(expectedResponse);
    })
});