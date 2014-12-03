/*
 * Copyright 2014 Victor EDA, Inc. All Rights Reserved.
 * Contact Victor EDA, Inc. if you would like to use this code in your project.
 */

CodeMirror.defineSimpleMode("eHVL_inner", {
  // The start state contains the rules that are initially used
  start: [
    // Rules are matched in the order in which they appear.
    {regex: /"(?:[^\\]|\\.)*?"/, token: "string"},
    {regex: /(?:all|also|as_a|assert|assume|an|and|attribute|bit|bits|bool|break|byte|case|check|change|compute|computed|cover|continue|cross|cycle|default|define|delay|detach|do|down|each|edges|else|emit|empty|event|exec|expect|export|extend|fail|fall|file|first|for|force|from|gen|global|if|ifdef|ifndef|in|index|int|inline|is|instance|item|keep|keeping|key|like|line|list|machine|matching|me|nand|new|nor|not|now|of|on|only|or|out|pass|prev|print|range|ranges|release|repeat|return|reverse|rise|routine|select|soft|start|state|step|string|struct|sync|sys|that|then|time|to|transition|true|try|type|undefined|uint|unit|until|using|var|when|while|with)\b/,
     token: "keyword"},
     /*
    {regex: /true|false|undefined/, token: "atom"},
    */
    {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
     token: "number"},
    {regex: /--.*/, token: "comment"},
    {regex: /[-+\/*=<>!]+/, token: "operator"},
    // indent and de-indent properties guide autoindentation
    /*
    {regex: /[\{\[\(]/, indent: true},
    {regex: /[\}\]\)]/, dedent: true},
    */
    {regex: /[a-z$][\w$]*/, token: "variable"}
  ],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "--"
  }
});

CodeMirror.defineSimpleMode("eHVL", {
  start: [
    {regex: /<'/, token: "meta", mode: {spec: "eHVL_inner", end: /'>/}},
    {regex: /.*/, token: "comment"}
  ],
  meta: {
    dontIndentStates: ["comment"]
  }
});

CodeMirror.defineMIME("text/x-e-hvl", {
  name: "eHVL"
});
