import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import rust from "../rust-benchmark/pkg/rust_benchmark.js";

function Benchmark() {
    const [results, setResults] = useState([]);

    function handleSubmit(size) {
        setResults([]);

        // Rust implementation
        const rustStart = performance.now();
        rustBenchmark(size);
        const rustEnd = performance.now();
        const rustExecutionTime = rustEnd - rustStart;
        setResults((results) =>
            results.concat({
                language: "Rust",
                size,
                executionTime: rustExecutionTime,
            })
        );

        // JavaScript implementation
        const jsStart = performance.now();
        jsBenchmark(size);
        const jsEnd = performance.now();
        const jsExecutionTime = jsEnd - jsStart;
        setResults((results) =>
            results.concat({
                language: "JavaScript",
                size,
                executionTime: jsExecutionTime,
            })
        );
    }

    function rustBenchmark(size) {
        // Rust implementation using wasm-pack
        rust().then((module) => {
            module.sort_random_data(size);

        });
    }

    function jsBenchmark(size) {
        const data = new Array(size).fill(0).map(() => Math.random());
        data.sort();
    }


    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <Table results={results} />
        </div>
    );
}

export default Benchmark;
