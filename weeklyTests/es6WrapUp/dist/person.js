"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function User(name, age, email) {
    _classCallCheck(this, User);

    this.Name = name;
    this.Age = age;
    this.Email = email;
  }

  _createClass(User, [{
    key: "sayHello",
    value: function sayHello() {
      console.log('Hey ' + this.Name + ', How are you doing?');
    }
  }]);

  return User;
}();