<template>
  <div>
    <h2>Projects</h2>
    <div class="projects">
      <div class="project" v-for="project in Projects" :key="project.key">
        <h3>{{ project.name }}</h3>
        <p>{{ project.details }}</p>
        <div class="buttons">
          <button>Edit</button>
          <button @click.prevent="deleteProject(project.key)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "ProjectList",

  data() {
    return {
      Projects: [],
    };
  },

  created() {
    db.collection("projects").onSnapshot((snapshotChange) => {
      this.Projects = [];
      snapshotChange.forEach((doc) => {
        this.Projects.push({
          key: doc.id,
          name: doc.data().name,
          details: doc.data().details,
        });
      });
    });
  },

  methods: {
    deleteProject(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("projects")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 250px;
  margin: 30px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #48cae4;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

button {
  justify-self: end;
}
</style>
