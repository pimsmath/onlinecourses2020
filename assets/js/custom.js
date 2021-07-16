function showNotes(notesElement, university, direction) {
    notesElement.empty();
    $.getJSON('/json/universities.json', function(jd) {
        notesElement.empty();
        let content = '';
        content += '<li><strong>Deadline</strong>: ' + jd[university][direction].deadline + '</li>';
        content += '<li><strong>Contacts</strong></li>';
        content += '<ul>';
        for (let i = 0; i < jd[university][direction].contacts.length; i++) {
            content += '<li>' + 
                jd[university][direction].contacts[i].name + 
                ' &lt;<a href="mailto:"' + jd[university][direction].contacts[i].email + '">' +
                jd[university][direction].contacts[i].email + '</a>&gt;</li>';
        }
        content += '</ul>';

        content += '<li><strong>PIMS Site Administrator</strong></li>';
        content += '<ul>';
        content += '<li> ' + jd[university][direction].site_admin.name;
        content += ' &lt;<a href="mailto:' + jd[university][direction].site_admin.email +'">' +
            jd[university][direction].site_admin.email + '</a>&gt;</li>';
        content += '</ul>';

        content += '<li><strong>Instructions</strong></li>';
        content += '<ul>';
        for (let i = 0; i < jd[university][direction].instructions.length; i++) {
            content += '<li>' + jd[university][direction].instructions[i] + '</li>';
        }
        content += '</ul>';
        let list = $('<ul />').html(content);
        notesElement.append(list);
        notesElement.show();
    });
}

$("#firstUniversity").change(function() {
    let university = $(this).val();
    showNotes($('#firstUniversityNotes'), university, "incoming");
});
$("#firstUniversityNotes").hide();

$("#secondUniversity").change(function() {
    let university = $(this).val();
    showNotes($('#secondUniversityNotes'), university, "outgoing");
});
$("#secondUniversityNotes").hide();
