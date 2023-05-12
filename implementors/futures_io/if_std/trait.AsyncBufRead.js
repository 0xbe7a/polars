(function() {var implementors = {
"futures":[],
"futures_io":[],
"futures_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</span>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</span>"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()