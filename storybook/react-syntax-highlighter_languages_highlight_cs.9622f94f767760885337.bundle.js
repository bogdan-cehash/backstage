(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{3048:function(module,exports){module.exports=function(hljs){var KEYWORDS={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},NUMBERS={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},VERBATIM_STRING={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},VERBATIM_STRING_NO_LF=hljs.inherit(VERBATIM_STRING,{illegal:/\n/}),SUBST={className:"subst",begin:"{",end:"}",keywords:KEYWORDS},SUBST_NO_LF=hljs.inherit(SUBST,{illegal:/\n/}),INTERPOLATED_STRING={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},hljs.BACKSLASH_ESCAPE,SUBST_NO_LF]},INTERPOLATED_VERBATIM_STRING={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},SUBST]},INTERPOLATED_VERBATIM_STRING_NO_LF=hljs.inherit(INTERPOLATED_VERBATIM_STRING,{illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},SUBST_NO_LF]});SUBST.contains=[INTERPOLATED_VERBATIM_STRING,INTERPOLATED_STRING,VERBATIM_STRING,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,NUMBERS,hljs.C_BLOCK_COMMENT_MODE],SUBST_NO_LF.contains=[INTERPOLATED_VERBATIM_STRING_NO_LF,INTERPOLATED_STRING,VERBATIM_STRING_NO_LF,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,NUMBERS,hljs.inherit(hljs.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];var STRING={variants:[INTERPOLATED_VERBATIM_STRING,INTERPOLATED_STRING,VERBATIM_STRING,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]},TYPE_IDENT_RE=hljs.IDENT_RE+"(<"+hljs.IDENT_RE+"(\\s*,\\s*"+hljs.IDENT_RE+")*>)?(\\[\\])?";return{aliases:["csharp"],keywords:KEYWORDS,illegal:/::/,contains:[hljs.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]}),hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},STRING,NUMBERS,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:,]/,contains:[hljs.TITLE_MODE,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",end:/[{;=]/,illegal:/[^\s:]/,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"meta-string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+TYPE_IDENT_RE+"\\s+)+"+hljs.IDENT_RE+"\\s*\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:KEYWORDS,contains:[{begin:hljs.IDENT_RE+"\\s*\\(",returnBegin:!0,contains:[hljs.TITLE_MODE],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS,relevance:0,contains:[STRING,NUMBERS,hljs.C_BLOCK_COMMENT_MODE]},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_cs.9622f94f767760885337.bundle.js.map