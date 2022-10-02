<script>
    /**
     * @type {any}
     */
    export let questionsAnswers;
    /**
     * @type {string}
     */
     export let section;
</script>

<div class="accordion">
    {#each questionsAnswers as questionAnswer, i}
    <div class="accordion-item">        
        <h2 class="accordion-header" id="heading{i}-{section}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{i}-{section}" aria-expanded="false" aria-controls="collapse{i}-{section}">
            {questionAnswer.question}
          </button>
        </h2>
        <div id="collapse{i}-{section}" class="accordion-collapse collapse" aria-labelledby="heading{i}-{section}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {questionAnswer.answer}
          </div>
        </div>
      </div>
    {/each}
  </div>