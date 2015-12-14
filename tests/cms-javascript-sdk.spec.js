if(typeof amp === "undefined" && typeof require !== "undefined"){
    var amp = require("../src/cms-javascript-sdk");
}

var productData = {
    "@content": "http://schema.amplience.com/sys/cms/api/1.0.0",
    "@type": "QueryRequest",
    "totalItems": 1,
    "result": [
        {
            "@id": "http://content.cms.amplience.com/ee67dc86-d59a-497c-8622-e96592d72b02"
        }
    ],
    "content": {
        "@graph": [
            {
                "slides": [
                    {
                        "@id": "http://content.cms.amplience.com/c17ffea4-e205-4ade-8df6-992750d23610",
                        "@type": "http://schema.cms.amplience.com/21e7a84e-f380-4003-b989-30a231230315"
                    },
                    {
                        "@id": "http://content.cms.amplience.com/71cb794e-146c-47f3-ac6a-8dba34b3b36f",
                        "@type": "http://schema.cms.amplience.com/15ac84c1-8bdf-4012-b116-4de083607e5e"
                    },
                    {
                        "@id": "http://content.cms.amplience.com/7cfd354e-d0d1-46cd-b5db-91ec3ec21eb5",
                        "@type": "http://schema.cms.amplience.com/efefee38-5bc7-473a-a067-9a4b907f490e"
                    }
                ],
                "title": "WK Carousel",
                "navigationType": "automatic",
                "parallaxEffect": "swoosh",
                "fixedOrientation": true,
                "@type": "http://schema.cms.amplience.com/c1949543-f8bc-45ad-82e0-db289a76e716",
                "@context": "http://context.cms.amplience.com/994c5abe-d4f0-4bfa-9b2e-161f4a4b399f",
                "@id": "http://content.cms.amplience.com/ee67dc86-d59a-497c-8622-e96592d72b02"
            },
            {
                "image": {
                    "mediaType": "image",
                    "id": "22b0b11e-025c-4d5a-9de5-1d1f9b844cf7",
                    "name": "sugar",
                    "endpoint": "JIMTEST",
                    "defaultHost": "i1-qa.adis.ws",
                    "thumbURL": "https://qa-dam-images.adis.ws/r/42aaa556-535a-4fb3-b362-e4f75ab2122e"
                },
                "imageFormat": "jpg",
                "seoIndexable": true,
                "imageAltText": "Some alt text",
                "imageUrl": "http://www.wehkamp.nl/koken-tafelen/tot-40-korting-op-veel-voor-jouw-perfecte-kerst/C51_KTA/?cm_re_o=PzEEwyCjCZBBup_wwkpCjC7wEwybwL",
                "imageTransparency": false,
                "imageRotating": true,
                "heading": "A sample heading",
                "paragraph": "A sample paragraph",
                "subParagraph": "A sample sub paragraph.  Etiam vel tortor arcu. Nam non maximus elit, condimentum elementum metus. Donec eleifend luctus mollis. Nulla luctus cursus lobortis. Aenean in bibendum sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur at tempus felis. Praesent malesuada congue feugiat. Quisque pulvinar cursus velit nec semper.",
                "hotspotTemplate": "$hottemplate$",
                "hotspotPosition": "TL",
                "hotspotOffer": "GREAT DEALS",
                "hotspotSku": "SKU123",
                "fixedOrientation": true,
                "poiX": 12,
                "poiY": 34,
                "poiW": 100,
                "poiH": 100,
                "title": "WK Test Image",
                "@type": "http://schema.cms.amplience.com/21e7a84e-f380-4003-b989-30a231230315",
                "@context": "http://context.cms.amplience.com/a95d57c3-576a-495c-90ff-4126c5c41db5",
                "@id": "http://content.cms.amplience.com/c17ffea4-e205-4ade-8df6-992750d23610"
            },
            {
                "title": "WK Test Text",
                "fontFaces": "Comic Sans, Arial, Tahoma",
                "fontSize": "12px",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate neque. Pellentesque ultricies velit vel mattis dignissim. Quisque fringilla enim in viverra cursus. Cras ultricies eros sed pharetra laoreet. Praesent a consequat sem, vel placerat neque. Suspendisse potenti. Morbi non erat at lectus elementum ornare a ut justo.",
                "seoIndex": true,
                "@type": "http://schema.cms.amplience.com/15ac84c1-8bdf-4012-b116-4de083607e5e",
                "@context": "http://context.cms.amplience.com/a95d57c3-576a-495c-90ff-4126c5c41db5",
                "@id": "http://content.cms.amplience.com/71cb794e-146c-47f3-ac6a-8dba34b3b36f"
            },
            {
                "thumbnail": {
                    "mediaType": "image",
                    "id": "fa300fea-3c0e-428b-b1f4-39d00b22054c",
                    "name": "transporter_clashing",
                    "endpoint": "JIMTEST",
                    "defaultHost": "i1-qa.adis.ws",
                    "thumbURL": "https://qa-dam-images.adis.ws/r/c780dd8c-78a7-45b8-ba24-b638c817ac95"
                },
                "video": {
                    "mediaType": "video",
                    "id": "24fb326e-5965-460b-848e-566c986b4c35",
                    "name": "ExtraMetaVid",
                    "endpoint": "JIMTEST",
                    "defaultHost": "i1-qa.adis.ws",
                    "thumbURL": "https://qa-dam-images.adis.ws/r/1e70ddd4-f9d6-47fb-872a-f2d34fbef2e8"
                },
                "title": "wehkamp test vid1",
                "adaptiveQuality": true,
                "fixedOrientation": true,
                "@type": "http://schema.cms.amplience.com/efefee38-5bc7-473a-a067-9a4b907f490e",
                "@context": "http://context.cms.amplience.com/994c5abe-d4f0-4bfa-9b2e-161f4a4b399f",
                "@id": "http://content.cms.amplience.com/7cfd354e-d0d1-46cd-b5db-91ec3ec21eb5"
            }
        ]
    }
}

describe("cms-javascript-sdk", function() {
    it("global object should exist", function(){
        expect(amp).not.toBe(undefined);
    });

    it("should have inlineContent property on object", function(){
        expect(typeof amp.inlineContent).toBe('function');
    });

    it("should inline content", function(){
        var expectedResponse = {
            "@id": "http://content.amplience.com/ee67dc86-d59a-497c-8622-e96592d72b02",
            "slides": [
                {
                    "image": {
                        "mediaType": "image",
                        "id": "22b0b11e-025c-4d5a-9de5-1d1f9b844cf7",
                        "name": "sugar",
                        "endpoint": "JIMTEST",
                        "defaultHost": "i1-qa.adis.ws",
                        "thumbURL": "https://qa-dam-images.adis.ws/r/42aaa556-535a-4fb3-b362-e4f75ab2122e"
                    },
                    "imageFormat": "jpg",
                    "seoIndexable": true,
                    "imageAltText": "Some alt text",
                    "imageUrl": "http://www.wehkamp.nl/koken-tafelen/tot-40-korting-op-veel-voor-jouw-perfecte-kerst/C51_KTA/?cm_re_o=PzEEwyCjCZBBup_wwkpCjC7wEwybwL",
                    "imageTransparency": false,
                    "imageRotating": true,
                    "heading": "A sample heading",
                    "paragraph": "A sample paragraph",
                    "subParagraph": "A sample sub paragraph.  Etiam vel tortor arcu. Nam non maximus elit, condimentum elementum metus. Donec eleifend luctus mollis. Nulla luctus cursus lobortis. Aenean in bibendum sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur at tempus felis. Praesent malesuada congue feugiat. Quisque pulvinar cursus velit nec semper.",
                    "hotspotTemplate": "$hottemplate$",
                    "hotspotPosition": "TL",
                    "hotspotOffer": "GREAT DEALS",
                    "hotspotSku": "SKU123",
                    "fixedOrientation": true,
                    "poiX": 12,
                    "poiY": 34,
                    "poiW": 100,
                    "poiH": 100,
                    "title": "WK Test Image",
                    "@type": "http://schema.cms.amplience.com/21e7a84e-f380-4003-b989-30a231230315",
                    "@context": "http://context.cms.amplience.com/a95d57c3-576a-495c-90ff-4126c5c41db5",
                    "@id": "http://content.cms.amplience.com/c17ffea4-e205-4ade-8df6-992750d23610"
                },
                {
                    "title": "WK Test Text",
                    "fontFaces": "Comic Sans, Arial, Tahoma",
                    "fontSize": "12px",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate neque. Pellentesque ultricies velit vel mattis dignissim. Quisque fringilla enim in viverra cursus. Cras ultricies eros sed pharetra laoreet. Praesent a consequat sem, vel placerat neque. Suspendisse potenti. Morbi non erat at lectus elementum ornare a ut justo.",
                    "seoIndex": true,
                    "@type": "http://schema.cms.amplience.com/15ac84c1-8bdf-4012-b116-4de083607e5e",
                    "@context": "http://context.cms.amplience.com/a95d57c3-576a-495c-90ff-4126c5c41db5",
                    "@id": "http://content.cms.amplience.com/71cb794e-146c-47f3-ac6a-8dba34b3b36f"
                },
                {
                    "thumbnail": {
                        "mediaType": "image",
                        "id": "fa300fea-3c0e-428b-b1f4-39d00b22054c",
                        "name": "transporter_clashing",
                        "endpoint": "JIMTEST",
                        "defaultHost": "i1-qa.adis.ws",
                        "thumbURL": "https://qa-dam-images.adis.ws/r/c780dd8c-78a7-45b8-ba24-b638c817ac95"
                    },
                    "video": {
                        "mediaType": "video",
                        "id": "24fb326e-5965-460b-848e-566c986b4c35",
                        "name": "ExtraMetaVid",
                        "endpoint": "JIMTEST",
                        "defaultHost": "i1-qa.adis.ws",
                        "thumbURL": "https://qa-dam-images.adis.ws/r/1e70ddd4-f9d6-47fb-872a-f2d34fbef2e8"
                    },
                    "title": "wehkamp test vid1",
                    "adaptiveQuality": true,
                    "fixedOrientation": true,
                    "@type": "http://schema.cms.amplience.com/efefee38-5bc7-473a-a067-9a4b907f490e",
                    "@context": "http://context.cms.amplience.com/994c5abe-d4f0-4bfa-9b2e-161f4a4b399f",
                    "@id": "http://content.cms.amplience.com/7cfd354e-d0d1-46cd-b5db-91ec3ec21eb5"
                }
            ],
            "title": "WK Carousel",
            "navigationType": "automatic",
            "parallaxEffect": "swoosh",
            "fixedOrientation": true,
            "@type": "http://schema.cms.amplience.com/c1949543-f8bc-45ad-82e0-db289a76e716",
            "@context": "http://context.cms.amplience.com/994c5abe-d4f0-4bfa-9b2e-161f4a4b399f",
            "@id": "http://content.cms.amplience.com/ee67dc86-d59a-497c-8622-e96592d72b02"
        };

        console.log(amp.inlineContent(productData))
        console.log(expectedResponse)
        expect(amp.inlineContent(productData)).toEqual(expectedResponse);
    })
});