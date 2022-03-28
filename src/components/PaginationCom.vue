<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="changePage(page.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in page.total_pages"
        :key="page + 1"
        :class="{ active: page === page.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{
          page
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="changePage(page.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
    }
  }
}
</script>
