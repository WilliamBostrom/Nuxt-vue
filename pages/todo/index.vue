<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import HelloWorld from "@/components/TodoList.vue";
import spin from "@/components/utils/spin";

// Types
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Sidmetadata
definePageMeta({
  layout: "todo",
});
useHead({
  title: "NextTodo",
});

// Reaktiva referenser
const todos = ref<Todo[]>([]);
const error = ref<string | null>(null);
const isLoading = ref(false);
const isAdding = ref(false);
const scrollOnAdd = ref("top");
let showList = ref(false);

// När sidan laddas
onMounted(() => {
  loadTodos();
});

// För animation
watch(showList, (newValue) => {
  const hideInput = document.getElementById("input-hide-while-spin");
  const listContainer = document.getElementById("todo-list-container");

  if (newValue) {
    if (hideInput) hideInput.style.display = "none";
    if (listContainer) {
      spin(listContainer, { duration: 2000, spin: 2 });
      setTimeout(() => {
        if (hideInput) hideInput.style.display = "block";
      }, 2400);
    }
  }
});

// Hämta todos
async function loadTodos() {
  isLoading.value = true;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    if (response.ok) {
      todos.value = await response.json();
    } else {
      error.value = "An error has occurred";
    }
  } catch (err) {
    error.value = "Network error";
  } finally {
    isLoading.value = false;
  }
}

// Lägg till todo
async function handleAddTodo(event: string) {
  isAdding.value = true;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: event,
        completed: false,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      const todo = await response.json();
      todos.value = [{ ...todo, id: Date.now() }, ...todos.value];
      console.log(todos);
    } else {
      alert("An error has occurred.");
    }
  } catch (err) {
    alert("Network error");
  } finally {
    isAdding.value = false;
  }
}

// Ta bort todo
async function handleRemoveTodo(id: number) {
  const originalTodos = [...todos.value];
  todos.value = todos.value.filter((t) => t.id !== id);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the todo.");
    }
  } catch (err) {
    todos.value = originalTodos;
    alert("Network error. Restoring the todo.");
  }
}

// Växla todo-status
async function handleToggleTodo(payload: { id: number; value: boolean }) {
  const { id, value } = payload;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ completed: value, userId: 1, id }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    if (response.ok) {
      const updatedTodo = await response.json();
      todos.value = todos.value.map((todo) =>
        todo.id === updatedTodo.id
          ? { ...todo, completed: updatedTodo.completed }
          : todo
      );
      console.log(updatedTodo);
    }
  } catch (error) {
    alert("Network error");
  }
}
function toggleShowList(): void {
  showList.value = !showList.value;
  console.log(showList);
}
</script>

<template>
  <div class="mb-4">
    <div
      v-if="!showList"
      class="w-full min-h-[380px] flex justify-center items-center btn-start"
    >
      <button
        @click="toggleShowList"
        class="btn flex justify-center items-center px-6 py-2"
      >
        Lets start!
      </button>
    </div>
    <div v-else class="w-full flex justify-end pt-4 py-2">
      <button @click="toggleShowList" class="btn mr-4">Close list</button>
    </div>
    <div
      id="todo-list-container"
      v-show="showList"
      :style="{
        transition: 'transform 1s ease-in-out',
      }"
    >
      <HelloWorld
        :todos="todos"
        :error="error"
        :is-loading="isLoading"
        :disable-adding="isAdding"
        :scroll-on-add="scrollOnAdd"
        @addtodo="handleAddTodo"
        @removetodo="handleRemoveTodo"
        @toggletodo="handleToggleTodo"
      />
    </div>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
} */

.btn-start:active {
  will-change: filter;
  transition: 2s filter 400ms;
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
