describe("Experience", function(){
  var newExperience, loadedNewExperience, assetDetails1, assetDetails2, newAsset1, newAsset2;

  beforeEach(function(){
    var details = {
      id: 10,
      title: "My Trip to Iceland",
      start_date: 10/24/15,
      end_date: 10/25/15,
      description: "Glaciers and Waterfalls",
      user_id: 3,
      // assets: [assetDetails1, assetDetails2]
    }
    assetDetails1 = {
      id: 4,
      caption: "Having fun",
      direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
      experience_id: 10,
      user_id: 3
    };
    assetDetails2 = {
      id: 5,
      caption: "Having fun",
      direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
      experience_id: 10,
      user_id: 3
    };
    newAsset1 = new Asset(assetDetails1);
    newAsset2 = new Asset(assetDetails2);
    newExperience = new Experience(details);
    newExperience._assets = [assetDetails1, assetDetails2];
    loadedNewExperience = newExperience;
    loadedNewExperience.loadAssets();
  });
  describe("instantiation", function(){
    it("creates an experience from a constructor function", function(){
      expect(newExperience.constructor.name).toEqual("Experience");
    });
    describe("id", function(){
      it("sets id", function(){
        expect(newExperience.id).toBe(10);
      });
    });
    describe("title", function(){
      it("sets title", function(){
        expect(newExperience.title).toBe("My Trip to Iceland");
      });
    });
    describe("start date", function(){
      it("sets start date", function(){
        expect(newExperience.start_date).toBe(10/24/15);
      });
    });
    describe("end date", function(){
      it("sets end date", function(){
        expect(newExperience.end_date).toBe(10/25/15);
      });
    });
    describe("description", function(){
      it("sets description", function(){
        expect(newExperience.description).toBe("Glaciers and Waterfalls");
      });
    });
    describe("user", function(){
      it("sets user_id", function(){
        expect(newExperience.user_id).toBe(3);
      });
    });
    describe("_assets", function(){
      it("sets _assets", function(){
        expect(newExperience._assets).toEqual([assetDetails1, assetDetails2]);
      });
    });
  });
   describe("converting Assets", function(){
    it("turn _assets into asset objects", function(){
      expect(loadedNewExperience.assets).toEqual([newAsset1, newAsset2])
    });
  });
  describe("Valid Experience", function(){
    it("will validate an experience", function(){
      expect(newExperience.validExperience()).toEqual(true);
    });
  });
});
