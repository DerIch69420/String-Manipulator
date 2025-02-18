// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod functions;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            functions::reverse,
            functions::uppercase,
            functions::lowercase,
            functions::swapcase,
            functions::count_chars,
            functions::leetspeak,
            functions::remove_duplicates,
            functions::shuffle,
            functions::remove_whitespaces,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
