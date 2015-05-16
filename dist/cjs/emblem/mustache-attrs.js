'use strict';

var ast_builder = require('./ast-builder');
var preprocessor = require('./preprocessor');

/*jshint newcap: false, laxbreak: true */
var Parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { _1start: peg$parse_1start },
        peg$startRuleFunction  = peg$parse_1start,

        peg$c0 = peg$FAILED,
        peg$c1 = void 0,
        peg$c2 = [],
        peg$c3 = function(v) {
          return v;
        },
        peg$c4 = "as",
        peg$c5 = { type: "literal", value: "as", description: "\"as\"" },
        peg$c6 = "|",
        peg$c7 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c8 = "/",
        peg$c9 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c10 = "[",
        peg$c11 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c12 = "\"",
        peg$c13 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c14 = "'",
        peg$c15 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c16 = null,
        peg$c17 = function(p) {
          return p;
        },
        peg$c18 = /^[^()]/,
        peg$c19 = { type: "class", value: "[^()]", description: "[^()]" },
        peg$c20 = /^[^'"]/,
        peg$c21 = { type: "class", value: "[^'\"]", description: "[^'\"]" },
        peg$c22 = "(",
        peg$c23 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c24 = ")",
        peg$c25 = { type: "literal", value: ")", description: "\")\"" },
        peg$c26 = " ",
        peg$c27 = { type: "literal", value: " ", description: "\" \"" },
        peg$c28 = /^[A-Za-z0-9]/,
        peg$c29 = { type: "class", value: "[A-Za-z0-9]", description: "[A-Za-z0-9]" },
        peg$c30 = /^[_\/]/,
        peg$c31 = { type: "class", value: "[_\\/]", description: "[_\\/]" },
        peg$c32 = "-",
        peg$c33 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c34 = ".",
        peg$c35 = { type: "literal", value: ".", description: "\".\"" },
        peg$c36 = function(attr) { return attr;},
        peg$c37 = function(attrs) {
          return attrs;
        },
        peg$c38 = "=",
        peg$c39 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c40 = function(attrName, attrValue) {
          return attrName + '=' + attrValue;
        },
        peg$c41 = "]",
        peg$c42 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c43 = { type: "other", description: "_1INDENT" },
        peg$c44 = { type: "any", description: "any character" },
        peg$c45 = function(t) { return preprocessor.INDENT_SYMBOL === t; },
        peg$c46 = function(t) { return ''; },
        peg$c47 = { type: "other", description: "_1DEDENT" },
        peg$c48 = function(t) { return preprocessor.DEDENT_SYMBOL === t; },
        peg$c49 = { type: "other", description: "_1LineEnd" },
        peg$c50 = "\r",
        peg$c51 = { type: "literal", value: "\r", description: "\"\\r\"" },
        peg$c52 = function(t) { return preprocessor.TERM_SYMBOL == t; },
        peg$c53 = "\n",
        peg$c54 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c55 = function(t) { return false; },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parse_0newMustacheAttrValue() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parse_0m_invalidValueStartChar();
      if (s2 === peg$FAILED) {
        s2 = peg$parse_0m_blockStart();
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c1;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0m_quotedString();
        if (s2 === peg$FAILED) {
          s2 = peg$parse_0m_valuePath();
          if (s2 === peg$FAILED) {
            s2 = peg$parse_0m_parenthetical();
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_0m_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0m_();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c3(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_blockStart() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c4) {
        s1 = peg$c4;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c5); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_0m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_0m_();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 124) {
            s3 = peg$c6;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_invalidValueStartChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 47) {
        s0 = peg$c8;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 91) {
          s0 = peg$c10;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c11); }
        }
      }

      return s0;
    }

    function peg$parse_0m_quotedString() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_0m_stringWithoutDouble();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s4 = peg$c12;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s2 = peg$c14;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_0m_stringWithoutSingle();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s4 = peg$c14;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parse_0m_valuePath() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0newMustacheNameChar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_0newMustacheNameChar();
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_parenthetical() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        s4 = peg$parse_0m_OPEN_PAREN();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_0m_inParensChar();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_0m_inParensChar();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_0m_parenthetical();
            if (s6 === peg$FAILED) {
              s6 = peg$c16;
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parse_0m_inParensChar();
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parse_0m_inParensChar();
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_0m_CLOSE_PAREN();
                if (s8 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7, s8];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_0m_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0m_();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c17(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_inParensChar() {
      var s0;

      if (peg$c18.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }

      return s0;
    }

    function peg$parse_0m_stringWithoutDouble() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_inStringChar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s2 = peg$c14;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_inStringChar();
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s2 = peg$c14;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_stringWithoutSingle() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_inStringChar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s2 = peg$c12;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_inStringChar();
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c12;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_inStringChar() {
      var s0;

      if (peg$c20.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }

      return s0;
    }

    function peg$parse_0m_OPEN_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 40) {
        s0 = peg$c22;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }

      return s0;
    }

    function peg$parse_0m_CLOSE_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 41) {
        s0 = peg$c24;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }

      return s0;
    }

    function peg$parse_0m_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c26;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }

      return s0;
    }

    function peg$parse_0newMustacheNameChar() {
      var s0;

      if (peg$c28.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c30.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s0 = peg$c32;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c33); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s0 = peg$c34;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c35); }
            }
          }
        }
      }

      return s0;
    }

    function peg$parse_1start() {
      var s0;

      s0 = peg$parse_1mustacheAttrs();

      return s0;
    }

    function peg$parse_1mustacheAttrs() {
      var s0, s1;

      s0 = peg$parse_1m_bracketedAttrs();
      if (s0 === peg$FAILED) {
        s0 = [];
        s1 = peg$parse_1newMustacheAttr();
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parse_1newMustacheAttr();
        }
      }

      return s0;
    }

    function peg$parse_1m_bracketedAttrs() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parse_1m_openBracket();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse_1m_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_1m_();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_1newMustacheAttr();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_1m_TERM();
            if (s6 === peg$FAILED) {
              s6 = peg$c16;
            }
            if (s6 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c36(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parse_1m_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_1m_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_1newMustacheAttr();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_1m_TERM();
              if (s6 === peg$FAILED) {
                s6 = peg$c16;
              }
              if (s6 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c36(s5);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parse_1m_closeBracket();
          peg$silentFails--;
          if (s4 !== peg$FAILED) {
            peg$currPos = s3;
            s3 = peg$c1;
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c37(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_1newMustacheAttr() {
      var s0;

      s0 = peg$parse_1m_keyValue();
      if (s0 === peg$FAILED) {
        s0 = peg$parse_1m_parenthetical();
        if (s0 === peg$FAILED) {
          s0 = peg$parse_0newMustacheAttrValue();
        }
      }

      return s0;
    }

    function peg$parse_1m_keyValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_1newMustacheAttrName();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_1m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_1m_();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c38;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parse_1m_();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_1m_();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_0newMustacheAttrValue();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parse_1m_();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parse_1m_();
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c40(s1, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_1newMustacheAttrName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_1newMustacheNameChar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_1newMustacheNameChar();
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_1m_parenthetical() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_1m_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_1m_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        s4 = peg$parse_1m_OPEN_PAREN();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_1m_inParensChar();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_1m_inParensChar();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_1m_parenthetical();
            if (s6 === peg$FAILED) {
              s6 = peg$c16;
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parse_1m_inParensChar();
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parse_1m_inParensChar();
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_1m_CLOSE_PAREN();
                if (s8 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7, s8];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_1m_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_1m_();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c17(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_1m_inParensChar() {
      var s0;

      if (peg$c18.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }

      return s0;
    }

    function peg$parse_1m_OPEN_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 40) {
        s0 = peg$c22;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }

      return s0;
    }

    function peg$parse_1m_CLOSE_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 41) {
        s0 = peg$c24;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }

      return s0;
    }

    function peg$parse_1m_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c26;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }

      return s0;
    }

    function peg$parse_1m_openBracket() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c10;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_1m_TERM();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_1m_INDENT();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_1m_closeBracket() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_1m_DEDENT();
      if (s1 === peg$FAILED) {
        s1 = peg$c16;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_1m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_1m_();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c41;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c42); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_1m_INDENT() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.length > peg$currPos) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = peg$currPos;
        s2 = peg$c45(s1);
        if (s2) {
          s2 = peg$c1;
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c46(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }

      return s0;
    }

    function peg$parse_1m_DEDENT() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.length > peg$currPos) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = peg$currPos;
        s2 = peg$c48(s1);
        if (s2) {
          s2 = peg$c1;
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c46(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }

      return s0;
    }

    function peg$parse_1m_TERM() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 13) {
        s1 = peg$c50;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$c16;
      }
      if (s1 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = peg$currPos;
          s3 = peg$c52(s2);
          if (s3) {
            s3 = peg$c1;
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 10) {
              s4 = peg$c53;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c54); }
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c55(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }

      return s0;
    }

    function peg$parse_1newMustacheNameChar() {
      var s0;

      if (peg$c28.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c30.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s0 = peg$c32;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c33); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s0 = peg$c34;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c35); }
            }
          }
        }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
var parse = Parser.parse, ParserSyntaxError = Parser.SyntaxError;
exports['default'] = parse;

exports.ParserSyntaxError = ParserSyntaxError;
exports.parse = parse;