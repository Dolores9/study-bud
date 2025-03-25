import { Stack } from "expo-router/stack";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

export default function Layout() {
  const createDbIfNeeded = async (db: SQLiteDatabase) => {
    console.log("creating database if needed")
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMAIRY KEY AUTOINCREMENT, firs_name TEXT last_name TEXT"
    );
  };
  return (
    <SQLiteProvider databaseName="test.db" onInit={createDbIfNeeded}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
}
