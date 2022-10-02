<script>
    /**
     * @type {any}
     */
    export let questionsAnswers;
</script>

<div class="accordion">
    {#each questionsAnswers as questionAnswer, i}
    <div class="accordion-item">        
        <h2 class="accordion-header" id="heading{i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{i}" aria-expanded="false" aria-controls="collapse{i}">
            {questionAnswer.question}
          </button>
        </h2>
        <div id="collapse{i}" class="accordion-collapse collapse" aria-labelledby="heading{i}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {questionAnswer.answer}
          </div>
        </div>
      </div>
    {/each}
  </div>