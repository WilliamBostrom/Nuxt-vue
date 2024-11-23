<script setup lang="ts">
import { computed, ref } from "vue";
const emit = defineEmits(["addtodo", "removetodo", "toggletodo"]);

const inputText = ref("");

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const props = defineProps<{
  todos: Todo[];
  error: string | null;
  isLoading: boolean;
  disableAdding: boolean;
  scrollOnAdd: string;
}>();

const type = computed(() => {
  if (props.isLoading) return "isLoading";
  if (props.error) return "error";
  if (props.todos && props.todos.length > 0) return "todos";
  return "empty";
});

function handleAddTodo(): void {
  if (inputText.value.trim()) {
    emit("addtodo", inputText.value);
    inputText.value = "";
  }
}

function handleToggleTodo(id: number, value: boolean): void {
  emit("toggletodo", { id, value });
}
</script>

<template>
  <div class="todo-list-wrapper">
    <p v-if="type === 'isLoading'" class="state-text">Loading...</p>
    <p v-else-if="type === 'error'" class="state-text">{{ error }}</p>
    <div v-else-if="type === 'todos'" class="todo-list">
      <div bind:offsetHeight="{listDivScrollHeight}">
        <p v-if="props.todos.length === 0" class="state-text">No todos yet</p>
        <ul>
          <li v-for="todo in props.todos" :key="todo.id">
            <div :class="todo.completed ? 'completed' : ''">
              <label>
                <input
                  type="checkbox"
                  :checked="todo.completed"
                  @change="
                    handleToggleTodo(
                      todo.id,
                      ($event.target as HTMLInputElement).checked
                    )
                  "
                />
                <div name="title">{{ todo.title }}</div>
              </label>
              <button
                class="remove-todo-button"
                aria-label="test"
                @click="$emit('removetodo', todo.id)"
              >
                <span> Delete </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <form class="add-todo-form" @submit.prevent="handleAddTodo">
      <input placeholder="New Todo" v-model="inputText" />
      <button
        class="add-todo-button"
        type="submit"
        :disabled="!inputText || disableAdding"
      >
        Add
      </button>
    </form>
  </div>
</template>

<style scoped>
.todo-list-wrapper {
  background-color: #424242;
  border: 2px solid #4b4b4b;
  border-radius: 5px;
}
.state-text {
  margin: 0;
  padding: 15px;
  text-align: center;
}
.todo-list {
  max-height: 200px;
  overflow: auto;
}
.todo-list ul {
  margin: 0;
  padding: 10px;
  list-style: none;
}
ul li > div {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  background-color: #303030;
  border-radius: 5px;
  padding: 10px;
  position: relative;
}

.todo-list-wrapper .todo-list ul li > div:hover .remove-todo-button {
  display: block;
}

label {
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  padding-right: 20px;
}
input[type="checkbox"] {
  margin: 0 10px 0 0;
  cursor: pointer;
}

.completed {
  opacity: 0.5;
  text-decoration: line-through;
  color: black;
}
.remove-todo-button {
  border: none;
  background: #42b883aa;
  color: black;
  padding: 5px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  display: none;
}

.add-todo-form {
  padding: 15px;
  background-color: #303030;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #4b4b4b;
}
input {
  flex: 1;
  background-color: #424242;
  border: 1px solid #4b4b4b;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
}
/* .add-todo-button:disabled {
  background-color: #42b883aa;
} */
</style>
