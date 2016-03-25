// Write your tests here!
// Here is an example.
if (Meteor.isServer) {
  Tinytest.add('set cache item', function (test) {
    var obj = {memorize: "All good"};
    Memorize.set("testKey", obj, function(err, res) {
      if (err) {
        test.fail(err);
      } else {
        test.ok(res);
      }
    });
  });

  Tinytest.add("get cache item", function(test) {
    Memorize.get("testkey", function(err, res) {
      if (err) {
        test.fail(err);
      } else {
        test.ok(res);
      }
    });
  });

  Tinytest.add("delete key", function(test) {
    Memorize.del("testKey", function(err, res) {
      if (err) {
        test.fail(err);
      } else {
        test.ok(res);
      }
    });
  });
}
