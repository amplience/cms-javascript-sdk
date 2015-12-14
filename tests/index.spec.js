"use strict";

var expect = require('chai').expect;
var amp = require("../src/index");

var productData = require("./sample-delivery/product.json");

describe("index", function() {
    it("should have inlineContent property on object", function(){
        expect(amp).to.have.property('inlineContent');
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

        expect(amp.inlineContent(productData)).deep.equal(expectedResponse);
    })
});