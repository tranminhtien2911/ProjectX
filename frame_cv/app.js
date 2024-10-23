document.querySelectorAll('.select-wrapper').forEach((selectWrapper) => {
    const selectElement = selectWrapper.querySelector('select');
    const selectedDiv = document.createElement('DIV');
    selectedDiv.className = 'select-selected';
    selectedDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    selectWrapper.appendChild(selectedDiv);

    const optionsDiv = document.createElement('DIV');
    optionsDiv.className = 'select-items select-hide';

    // Tạo danh sách các tùy chọn từ thẻ select
    Array.from(selectElement.options).forEach(option => {
        const optionDiv = document.createElement('DIV');
        optionDiv.innerHTML = option.innerHTML;

        optionDiv.addEventListener('click', function () {
            selectElement.selectedIndex = [...selectElement.options].findIndex(opt => opt.innerHTML === this.innerHTML);
            selectedDiv.innerHTML = this.innerHTML;

            optionsDiv.querySelectorAll('.same-as-selected').forEach(el => el.classList.remove('same-as-selected'));
            this.classList.add('same-as-selected');

            selectedDiv.click(); // Đóng dropdown sau khi chọn
        });

        optionsDiv.appendChild(optionDiv);
    });

    selectWrapper.appendChild(optionsDiv);

    selectedDiv.addEventListener('click', function (e) {
        e.stopPropagation();
        const isHidden = optionsDiv.classList.contains('select-hide');
        if (isHidden) {
            optionsDiv.classList.remove('select-hide');
        } else {
            optionsDiv.classList.add('select-hide');
        }
        this.classList.toggle('select-arrow-active');
    });
});

function closeAllSelect(current) {
    document.querySelectorAll('.select-items').forEach(item => item.classList.add('select-hide'));
    document.querySelectorAll('.select-selected').forEach(sel => sel !== current && sel.classList.remove('select-arrow-active'));
}

document.addEventListener('click', closeAllSelect);
