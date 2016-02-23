describe("Asset", function(){
  var newAsset, badAsset, badAsset2, badAsset3;


  beforeEach(function(){
    var details = {
      id: 4,
      caption: "Having fun",
      direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
      experience_id: 4,
      user_id: 3
    };
    var badDetails = {
      id: 4,
      caption: "Having fun",
      experience_id: 4,
      user_id: 3
    };
    var badDetails2 = {
      id: 4,
      caption: "Having fun",
      direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
      user_id: 3
    };
    var badDetails3 = {
      id: 4,
      caption: "Having fun",
      direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
      experience_id: 4,
    };

    newAsset = new Asset(details);
    badAsset = new Asset(badDetails);
    badAsset2 = new Asset(badDetails2);
    badAsset3 = new Asset(badDetails3);
  });

  describe("instantiation", function(){
    it("creates an asset from a contructor function", function(){
      expect(newAsset.constructor.name).toEqual("Asset");
    });

    describe("id", function(){
      it("sets id", function(){
        expect(newAsset.id).toBe(4);
      });
    });
    describe("caption", function(){
      it("sets caption", function(){
        expect(newAsset.caption).toBe("Having fun");
      });
    });
    describe("direct_upload_url", function(){
      it("sets direct_upload_url", function(){
        expect(newAsset.direct_upload_url).toBe("http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg");
      });
    });
    describe("experience_id", function(){
      it("sets experience_id", function(){
        expect(newAsset.experience_id).toBe(4);
      });
    });
    describe("user_id", function(){
      it("sets user_id", function(){
        expect(newAsset.user_id).toBe(3);
      });
    });
  });
  describe("Valid Asset", function(){
    it("will validate an Asset", function(){
      expect(newAsset.validAsset()).toEqual(true);
    });
  });
  describe("Invalid Assets", function(){
    it("Asset will be invalid without url", function(){
      expect(badAsset.validAsset()).toEqual(false);
    });
    it("Asset will be invalid without an experience_id", function(){
      expect(badAsset2.validAsset()).toEqual(false);
    });
    it("Asset will be invalid without an user_id", function(){
      expect(badAsset3.validAsset()).toEqual(false);
    });
  });
});

