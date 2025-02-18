use rand::seq::SliceRandom;
use rand::thread_rng;

#[tauri::command]
pub fn reverse(text: &str) -> String {
    return text.chars().rev().collect::<String>();
}

#[tauri::command]
pub fn uppercase(text: &str) -> String {
    return text.to_uppercase();
}

#[tauri::command]
pub fn lowercase(text: &str) -> String {
    return text.to_lowercase();
}

#[tauri::command]
pub fn swapcase(text: &str) -> String {
    return text
        .chars()
        .map(|char| {
            if char.is_lowercase() {
                char.to_uppercase().to_string()
            } else {
                char.to_lowercase().to_string()
            }
        })
        .collect();
}

#[tauri::command]
pub fn count_chars(text: &str) -> String {
    return text
        .chars()
        .filter(|char| !char.is_whitespace())
        .count()
        .to_string();
}

#[tauri::command]
pub fn leetspeak(text: &str) -> String {
    return text
        .replace("a", "4")
        .replace("e", "3")
        .replace("i", "1")
        .replace("o", "0")
        .replace("s", "$")
        .replace("t", "7");
}

#[tauri::command]
pub fn remove_duplicates(text: &str) -> String {
    let mut chars = text.chars().peekable();
    let mut result = String::new();

    while let Some(c) = chars.next() {
        if Some(&c) != chars.peek() {
            result.push(c);
        }
    }

    return result;
}

#[tauri::command]
pub fn shuffle(text: &str) -> String {
    let mut chars: Vec<char> = text.chars().collect();
    let mut rng = thread_rng();
    chars.shuffle(&mut rng);
    return chars.into_iter().collect();
}

#[tauri::command]
pub fn remove_whitespaces(text: &str) -> String {
    return text.replace(" ", "");
}
