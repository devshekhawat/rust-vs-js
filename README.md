# Rust WebAssembly VS Javascript Benchmark

This is a simple project that demonstrates how to use Rust and WebAssembly to benchmark a function compared to javascript.

The benchmark compares the performance of a Rust function that generates random data and sort that with a JavaScript function that does the same thing. The Rust function is compiled to WebAssembly, and the benchmark measures how long it takes to execute the function.



<img width="1375" alt="image" src="https://user-images.githubusercontent.com/11770433/232906848-5b50e9d1-1cf5-40d6-b4ee-ddf36cc3b062.png">

## Installation

To run this project, you will need to have Rust and Node.js installed on your system.

1. Clone the repository:

   ```
   git clone https://github.com/devshekhawat/rust-vs-js.git
   ```

2. Build the WebAssembly module:

   ```
   cd rust-vs-js/rust-benchmark
   wasm-pack build --target web
   ```

3. Manually copy rust-benchmark/pkg to /src (PS: this is work in progress and will remove this setup in future)

4. Build the web app:

   ```
   cd ../web-benchmark
   npm install
   npm start
   ```

## Usage

To run the benchmark, you can use goto http://localhost:3000. You can open this url in a web browser to see the results of the benchmark.

The benchmark compares the performance of a Rust function that generates random data and sort that with a JavaScript function that does the same thing. The Rust function is compiled to WebAssembly, and the benchmark measures how long it takes to execute the function.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgments

This project was inspired by the Rust and WebAssembly book, which provides a great introduction to using Rust and WebAssembly together.
