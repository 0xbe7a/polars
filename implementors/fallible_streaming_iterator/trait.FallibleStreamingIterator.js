(function() {var implementors = {
"arrow2":[["impl&lt;'a&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/json/write/struct.RecordSerializer.html\" title=\"struct arrow2::io::json::write::RecordSerializer\">RecordSerializer</a>&lt;'a&gt;"],["impl&lt;A, I&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/json/write/struct.Serializer.html\" title=\"struct arrow2::io::json::write::Serializer\">Serializer</a>&lt;A, I&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.Error.html\" title=\"enum arrow2::error::Error\">Error</a>&gt;&gt;,</span>"],["impl&lt;A, I&gt; <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"arrow2/io/ndjson/write/struct.Serializer.html\" title=\"struct arrow2::io::ndjson::write::Serializer\">Serializer</a>&lt;A, I&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.Error.html\" title=\"enum arrow2::error::Error\">Error</a>&gt;&gt;,</span>"]],
"fallible_streaming_iterator":[],
"parquet2":[["impl&lt;'a, V, E&gt; <a class=\"trait\" href=\"parquet2/trait.FallibleStreamingIterator.html\" title=\"trait parquet2::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"parquet2/write/struct.DynStreamingIterator.html\" title=\"struct parquet2::write::DynStreamingIterator\">DynStreamingIterator</a>&lt;'a, V, E&gt;"],["impl&lt;I&gt; <a class=\"trait\" href=\"parquet2/trait.FallibleStreamingIterator.html\" title=\"trait parquet2::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"parquet2/read/struct.BasicDecompressor.html\" title=\"struct parquet2::read::BasicDecompressor\">BasicDecompressor</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"parquet2/error/type.Result.html\" title=\"type parquet2::error::Result\">Result</a>&lt;<a class=\"enum\" href=\"parquet2/page/enum.CompressedPage.html\" title=\"enum parquet2::page::CompressedPage\">CompressedPage</a>&gt;&gt;,</span>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"parquet2/error/type.Result.html\" title=\"type parquet2::error::Result\">Result</a>&lt;<a class=\"enum\" href=\"parquet2/page/enum.Page.html\" title=\"enum parquet2::page::Page\">Page</a>&gt;&gt;&gt; <a class=\"trait\" href=\"parquet2/trait.FallibleStreamingIterator.html\" title=\"trait parquet2::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"parquet2/write/struct.Compressor.html\" title=\"struct parquet2::write::Compressor\">Compressor</a>&lt;I&gt;"],["impl&lt;P: <a class=\"trait\" href=\"parquet2/read/trait.PageIterator.html\" title=\"trait parquet2::read::PageIterator\">PageIterator</a>&gt; <a class=\"trait\" href=\"parquet2/trait.FallibleStreamingIterator.html\" title=\"trait parquet2::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"parquet2/read/struct.Decompressor.html\" title=\"struct parquet2::read::Decompressor\">Decompressor</a>&lt;P&gt;"]],
"polars":[],
"polars_io":[],
"streaming_decompression":[["impl&lt;I, O, F, E, II&gt; <a class=\"trait\" href=\"streaming_decompression/trait.FallibleStreamingIterator.html\" title=\"trait streaming_decompression::FallibleStreamingIterator\">FallibleStreamingIterator</a> for <a class=\"struct\" href=\"streaming_decompression/struct.Decompressor.html\" title=\"struct streaming_decompression::Decompressor\">Decompressor</a>&lt;I, O, F, E, II&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"streaming_decompression/trait.Compressed.html\" title=\"trait streaming_decompression::Compressed\">Compressed</a>,\n    O: <a class=\"trait\" href=\"streaming_decompression/trait.Decompressed.html\" title=\"trait streaming_decompression::Decompressed\">Decompressed</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,\n    II: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;I, E&gt;&gt;,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(I, &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O, E&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()