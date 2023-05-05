QUnit.module('fizz_buzz', function() {
  //létezik-e?
    QUnit.test('aktErtek fg létezik-e?', function(assert) {
      assert.ok(aktErtek, "Nincs aktErtek nevű függvény.");
    });
    //függvény-e?
    QUnit.test('aktErtek fg létezik-e?', function(assert) {
      assert.ok(typeof aktErtek === "function", 
       "Az  aktErtek nem függvény.");
    });

    QUnit.test('n = 3-ra jól működik', function(assert) {
      assert.equal(aktErtek(3), "Fizz");
    });

    QUnit.test('n = -3-ra jól működik', function(assert) {
      assert.equal(aktErtek(-3), "Fizz");
    });

    QUnit.test('n = 5-re jól működik', function(assert) {
      assert.equal(aktErtek(5), "Buzz");
    });

    QUnit.test('n = 2-re jól működik', function(assert) {
      assert.equal(aktErtek(2), 2);
    });

    QUnit.test('n = 15-re jól működik', function(assert) {
      assert.equal(aktErtek(15), "Fizz Buzz");
    });

    QUnit.test('ciklusban tesztelés', function(assert) {
      let s1 = [5, 10, 25];
      s1.forEach(function(elem){
        assert.equal(aktErtek(elem), "Buzz");

      })
      
    });

    QUnit.test('1,2,Fizz', function(assert) {
      assert.equal(sorozat(3), "1,2,Fizz");
    });

    
    QUnit.test('sorozat2 eredménye', function(assert) {
      assert.equal(sorozat2(5), "1, 2, Fizz, 4, Buzz");
    });
  });
  
  