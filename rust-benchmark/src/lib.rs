use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sort_random_data(size: usize) -> Vec<f64> {
    let mut data = vec![0.0; size];
    for i in 0..size {
        data[i] = js_sys::Math::random();
    }
    data.sort_by(|a, b| a.partial_cmp(b).unwrap());
    data
}
